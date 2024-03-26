
import AddIcon from '@mui/icons-material/Add';
import { Box, Fab, Paper, Stack } from "@mui/material";
import React, { useEffect } from "react";
import Split from "react-split";
import "./App.css";

import { LayerEditor } from './components/LayerEditor';
import { MainTopBar } from "./components/MainTopBar";
import { StreamFrameDisplay } from "./components/StreamFrameDisplay";
import { StreamLayer } from "./types/types";

export const App = () => {
	useEffect(() => {
		document.title = `Streaming Tools`;
	}, []);

	// const { client, session, pairings, connect, disconnect } = useWalletConnect();

	const [layers, setLayers] = React.useState<StreamLayer[]>([]);
	const [viewLayer,] = React.useState<string | null>(new URLSearchParams(document.location.search).get("layer"));

	React.useEffect(() => {
		setLayers([...layers]);
	}, [layers, layers.length]);

	// const {
	// 	requestPermissions,
	// 	getWallets,
	// } = useWalletConnectRpc();

	// const onConnect = () => {
	// 	if (!client) throw new Error('WalletConnect is not initialized.');

	// 	if (pairings.length === 1) {
	// 		connect({ topic: pairings[0].topic });
	// 	} else if (pairings.length) {
	// 		console.log('The pairing modal is not implemented.', pairings);
	// 	} else {
	// 		connect();
	// 	}
	// };

	if (viewLayer) {
		return (
			<Box height={"100vh"}>
				<StreamFrameDisplay layers={layers.filter((layer) => layer.name === viewLayer)} />
			</Box>
		);
	}
	return (
		<Box height={"100vh"}>
			{MainTopBar(undefined, () => { }, () => { })}
			<Split style={{ display: "flex", flexDirection: "row", height: "calc(100vh - 64px)" }}>
				<Paper style={{ width: "100%", height: "100%" }}>
					<Stack direction={"column"} spacing={2} style={{ padding: "8px" }}>
						{layers.map((layer) => (
							<LayerEditor layer={layer} onDelete={() => {
								setLayers(layers.filter((l) => l !== layer));
							}} />
						))}
					</Stack>
					<Fab size='medium' color='primary' sx={{ float: "right", right: "30px", position: 'relative' }} onClick={() => {
						setLayers([...layers, { name: "StreamFrame", elements: [] }]);
					}}><AddIcon /></Fab>
				</Paper>
				<Box className="transparency-grid">
					<StreamFrameDisplay layers={layers} />
				</Box>
			</Split>
		</Box >
	);
};

