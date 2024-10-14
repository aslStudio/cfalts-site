import React from "react";
import {Route, Routes} from "react-router-dom";

import { Main } from "@/pages/Main"
import { Mint } from "@/pages/Mint"
import { Dapp } from "@/pages/Dapp";

export const RouterView = React.memo(() => {
    return (
			<Routes>
				<Route path={'/'} element={<Main />} />
				<Route path={'/mint'} element={<Mint />} />
				<Route path={'/dapp'} element={<Dapp />} />
			</Routes>
    )
})