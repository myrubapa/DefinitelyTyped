/// <reference path="../rx/rx.d.ts" />
/// <reference path="../rx/rx.binding-lite.d.ts" />
/// <reference path="../rx/rx.virtualtime.d.ts" />
/// <reference path="../rx/rx.testing.d.ts" />

declare module ng {

    interface IRootScopeService {
        $createObservableFunction<T>(functionName: string, listener: (...args: any[]) => any): Rx.IObservable<T>;
        $toObservable<T>(watchExpression: string, objectEquality?: boolean): Rx.IObservable<T>;
        $toObservable<T>(watchExpression: (scope: IScope) => any, objectEquality?: boolean): Rx.IObservable<T>;
        $eventToObservable<T>(eventName: string): Rx.IObservable<T>;
        //TODO: add $digestObservables
    }

    module rx {

        interface IObserveOnScopeService {
            <T>(scope: IScope, watchExpression: string, objectEquality?: boolean): Rx.IObservable<T>;
            <T>(scope: IScope, watchExpression: (scope: IScope) => any, objectEquality?: boolean): Rx.IObservable<T>;
        }

        class RxService {
            // Helpers
            config: Rx.Config;
            helpers: Rx.Helpers;

            // Core
            //TODO: add spawn
            Observable: Rx.ObservableStatic;
            Observer: Rx.ObserverStatic;
            Notification: Rx.NotificationStatic;

            // Subjects
            AsyncSubject: Rx.AsyncSubjectStatic;
            BehaviorSubject: Rx.BehaviorSubjectStatic;
            ReplaySubject: Rx.ReplaySubjectStatic;
            Subject: Rx.SubjectStatic;

            // Schedulers
            HistoricalScheduler: Rx.HistoricalScheduler;
            Scheduler: Rx.Scheduler;
            VirtualTimeScheduler: new <T, U>(initialClock: T, comparer: (first: T, second: T) => number) => Rx.VirtualTimeScheduler<T, U>;

            // Disposables
            CompositeDisposable: Rx.CompositeDisposable;
            Disposable: Rx.Disposable;
            RefCountDisposable: Rx.RefCountDisposable;
            SerialDisposable: Rx.SerialDisposable;
            SingleAssignmentDisposable: Rx.SingleAssignmentDisposable;

            // Testing
            ReactiveTest: Rx.ReactiveTestStatic;
            Recorded: Rx.Recorded;
            Subscription: Rx.Subscription;
            TestScheduler: Rx.TestScheduler;

            // Node.js Interop
            //TODO: add node
        }

    }

}