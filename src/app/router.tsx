import React from "react";
import {Route, Routes} from "react-router-dom";

import { Main } from "@/pages/Main"
import { Mint } from "@/pages/Mint"

export const RouterView = React.memo(() => {
    return (
			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/mint'} element={<Mint />} />
			</Routes>
    )
})