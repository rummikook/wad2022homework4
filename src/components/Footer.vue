<template>
    <footer>
        <p>
            Created by Juli Sokolov, Ingrem Laanepere and Hanna Paalmäe<br>
            Copyright © 2022 WAD2022 Team J
        </p>
    </footer>
</template>

<style scoped>
    footer {
	display: flex;
	background-color:	#bdbdbd;
	border-radius: 10px;
	margin: 0;
	padding: 1em;
	position: fixed;
	bottom: 0;
	right: 0;
    }
    @media (max-width: 800px) {
        footer {
            display: none;
        }
    }
</style>
