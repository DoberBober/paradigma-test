(function() {
	document.addEventListener("mousemove", parallax);
	const parallaxElements = document.querySelectorAll(".top__parallax");


	function parallax(e) {
		let _w = window.innerWidth/2;
		let _h = window.innerHeight/2;
		let _mouseX = e.clientX;
		let _mouseY = e.clientY;
		let _depth3 = `${(_mouseX - _w) * 0.02}px ${(_mouseY - _h) * 0.02}px`;
		let x = `${_depth3}`;

		for(let el of parallaxElements){
			el.style.backgroundPosition = x;
		}
    }

})();
