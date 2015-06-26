exports.config = {
  /* selenium address should be replaced with ip retured after running 
	 the command webdriver-manager start. 
	 In my case it returned http://127.0.0.1:4444/wd/hub, 
	 so I replaced it with http://localhost:4444/wd/hub
   */
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['spec.js']
}