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
			<img class="banner"  src="https://alekhakumarswain.github.io/logofile.png">
			<a style="text-decoration:none;" href=" https://www.facebook.com/swainraja.kumaralekha " >
							<div class="icon facebook"></div>
						</a>
						<a style="text-decoration:none;" href=" https://twitter.com/Alekha5258swain " >
							<div class="icon twitter"></div>
						</a>
						<a style="text-decoration:none;" href=" https://www.instagram.com/alekhakumarswainraja/ " >						
							<div class="icon instagram"></div> 
						</a>
						<a style="text-decoration:none;" href=" https://www.linkedin.com/in/alekhakumar " >
							<div class="icon linkedin"></div>
						</a>
						<a style="text-decoration:none;" href=" https://api.whatsapp.com/send?phone=918018226416 " >
							<div class="icon whatsapp"></div>
						</a>
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
        createLinkElementAndAppendInHead('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');						
    	createLinkElementAndAppendInHead('css/popup.css');
	createLinkElementAndAppendInHead('css/Icon.css');
	document.body.insertAdjacentHTML('afterbegin', DOMString)				
	const btnOk = document.querySelector('.close');
	btnOk.addEventListener('click', (e) => {
	e.target.closest('.popup-alert-div').remove();
	});				
	})();
