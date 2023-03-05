(() => {				
	const DOMString = `		
	<div class=" popup-alert-div ">
		<div class="popup-alert">
			<b class="popup-alert-header" target="_blank">
				<b 						 
				  style="color:#297baa;
				  		 font-family: Tahoma, Verdana, sans-serif;
				  	     ">
						ALEKHA   
				</b>
				<b 						 
					style="font-family: Tahoma, Verdana, sans-serif;
							color:rgba(229,231,32,255);
							margin:10px 10px 0px 10px;
							"> 
						 KUMAR
				</b>
				<b 						 
					style="font-family: Tahoma, Verdana, sans-serif;
						color:rgba(22,231,32,255)
						"> 
						SWAIN 
				</b>
			</b>				
			<img  src="https://alekhakumarswain.github.io/flex.gif">			
			<a href="https://alekhakumarswain.github.io" class="popup-alert-btn submit">VISIT NOW</a>
			<a href="#" class="popup-alert-btn close">SKIP NOW</a>
		
		</div>
	</div>
	`						
	const createLinkElementAndAppendInHead = (path) => {
	const element = document.createElement('link');
	element.href = `${path}`;
	element.rel = 'stylesheet';
	document.head.append(element);
	}									
	createLinkElementAndAppendInHead('https://alekhakumarswain.github.io/pop-script.css ');
	document.body.insertAdjacentHTML('afterbegin', DOMString)				
	const btnOk = document.querySelector('.close');
	btnOk.addEventListener('click', (e) => {
	e.target.closest('.popup-alert-div').remove();
	});				
	})();
