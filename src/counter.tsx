import { Init, Update, View } from "./elm-types";
import { absurd, pipe } from "fp-ts/es6/function";

import { cmd } from "elm-ts";

// ============================================================================
// 1. Model
// ============================================================================
type Model = number;

type Decrement = {
    type: "Decrement";
};

type Increment = {
    type: "Increment";
};

// ============================================================================
// 2. Message
// ============================================================================
type Msg =
    | Decrement
    | Increment;

// ============================================================================
// 3. Init
// ============================================================================
export const init: Init<Model, Msg> = () => [
    0,
    cmd.none
];

// ============================================================================
// 4. update
// ============================================================================
export const update: Update<Model, Msg> = (msg, model) => {
    switch (msg.type) {
        case "Decrement":
            return [
                model - 1,
                cmd.none
            ];

        case "Increment":
            return [
                model + 1,
                cmd.none
            ];

        default:
            return absurd(msg);

    }
};

// ============================================================================
// 5. View
// ============================================================================
export const view: View<Model, Msg> = (model) => (dispatch) => <div>
    <h1>Model: {model}</h1>
    <button onClick={() => dispatch({ type: "Decrement" })}>-</button>
    <button onClick={() => dispatch({ type: "Increment" })}>+</button>
</div>;
