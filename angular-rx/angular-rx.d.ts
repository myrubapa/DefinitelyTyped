declare module ng {

    interface IRootScopeService {
        $createObservableFunction(functionName: string, listener: (...args: any[]) => any): Rx.IDisposable;
        $toObservable(watchExpression: string, objectEquality?: boolean): Rx.IObservable;
        $toObservable(watchExpression: (scope: IScope) => any, objectEquality?: boolean): Rx.IObservable;
        $eventToObservable(eventName: string): Rx.IObservable;
        //TODO: add $digestObservables
    }

    module rx {

        interface IObserveOnScopeService {
            (scope: IScope, watchExpression: string, objectEquality?: boolean): Rx.IObservable;
            (scope: IScope, watchExpression: (scope: IScope) => any, objectEquality?: boolean): Rx.IObservable;
        }

        class RxService {
            // Helpers
            config: Rx.config;
            helpers: Rx.helpers;

            // Core
            //TODO: add spawn
            Observable: Rx.ObservableStatic;
            Observer: Rx.ObserverStatic;
            Notification: Rx.Notification;

            // Subjects
            AsyncSubject: Rx.AsyncSubjectStatic;
            BehaviorSubject: Rx.BehaviorSubjectStatic;
            ReplaySubject: Rx.ReplaySubjectStatic;
            Subject: Rx.SubjectStatic;

            // Schedulers
            HistoricalScheduler: Rx.HistoricalScheduler;
            Scheduler: Rx.Scheduler;
            VirtualTimeScheduler: Rx.VirtualTimeScheduler;

            // Disposables
            CompositeDisposable: Rx.CompositeDisposable;
            Disposable: Rx.Disposable;
            RefCountDisposable: Rx.RefCountDisposable;
            SerialDisposable: Rx.SerialDisposable;
            SingleAssignmentDisposable: Rx.SingleAssignmentDisposable;

            // Testing
            ReactiveTest: Rx.ReactiveTest;
            Recorded: Rx.Recorded;
            Subscription: Rx.Subscription;
            TestScheduler: Rx.TestScheduler;

            // Node.js Interop
            //TODO: add node
        }

    }

}

declare module Rx {
    class Observable<T> {
        safeApply($scope: ng.IScope, fn: (data: any) => void): Observable<T>;
    }
}