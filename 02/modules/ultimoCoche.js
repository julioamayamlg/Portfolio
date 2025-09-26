"use strict"

import { taller, rescola } from "../script.js";

export function ultimoCoche() {
    let elemento = taller.ultimo();
    rescola.innerHTML = elemento;
}