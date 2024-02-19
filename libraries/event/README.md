# @yume-chan/event

Provides a strongly-typed EventEmitter/Event implementation.

Inspired by TypeScript, Visual Studio Code, and more.

-   [EventEmitter/Event](#eventemitterevent)

## EventEmitter/Event

```ts
interface EventListener<TEvent, TThis, TArgs extends unknown[], TResult> {
    (this: TThis, e: TEvent, ...args: TArgs): TResult;
}

interface RemoveEventListener extends Disposable {
    (): void;
}

interface Event<TEvent, TResult = unknown> {
    (
        listener: EventListener<TEvent, unknown, [], TResult>,
    ): RemoveEventListener;
    <TThis, TArgs extends unknown[]>(
        listener: EventListener<TEvent, TThis, TArgs, TResult>,
        thisArg: TThis,
        ...args: TArgs
    ): RemoveEventListener;
}

class EventEmitter<TEvent, TResult = unknown> implements Disposable {
    protected readonly listeners: EventListenerInfo<TEvent, TResult>[];
    constructor();
    protected addEventListener(
        info: EventListenerInfo<TEvent, TResult>,
    ): RemoveEventListener;
    event: Event<TEvent, TResult>;
    fire(e: TEvent): void;
    dispose(): void;
}
```

|                                     | Node.js `EventEmitter` | This `EventEmitter` |
| ----------------------------------- | ---------------------- | ------------------- |
| Can emit multiple event types       | Yes                    | No                  |
| Only trusted source can emit events | No                     | Yes                 |
| Strongly-typed                      | No                     | Yes                 |

One `EventEmitter` for one event type. So for classes that have multiple event types, multiple `EventEmitter` can be created and assigned to multiple fields.

Usually classes keep `EventEmitter`s private (using TypeScript's `private` modifier, or ECMAScript private field), only expose the `Event` interface (via `EventEmitter.event`).

Everyone can subscribe to the event using the `Event` interface, but the event can only be emitted from the `EventEmitter` class.

```ts
const emitter = new EventEmitter<void>();
const subscribe = emitter.event;
const unsubscribe = subscribe(() => {});
emitter.fire();
unsubscribe();
```

The returned `unsubscribe` is both a function and a `Disposable`, so it can be used with `DisposableStack`.
