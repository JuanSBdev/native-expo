import React from "react";
import {MyProvider} from './src/context'
import Index from "./index";
import { registerRootComponent } from "expo";
const provider = ()=>(
    <MyProvider>
        <Index></Index>
    </MyProvider>
)
registerRootComponent(provider)
