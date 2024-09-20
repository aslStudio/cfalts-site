import {Route, Routes} from "react-router-dom";
import React from "react";
import {Main} from "@/pages/Main/Main"

export const RouterView = React.memo(() => {
    return (
			<Routes>
				<Route path={'/'} element={<Main />} />
			</Routes>
    )
})