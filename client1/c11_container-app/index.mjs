/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// 'use strict';

// const express = require('express');
   import express from 'express';
   var __dirname = '/workspaces/dev02-sue/client1/c11_container-app'

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
//	res.send('Hello remote world!\n');
   res.sendFile(`${__dirname}/index.html`)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);