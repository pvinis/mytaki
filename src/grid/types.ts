export interface Board {
	top: BoardSide;
	bottom: BoardSide;
}

export interface BoardSide {
	side: "top" | "bottom";
	grid: number[][];
	legend: string[];
}
