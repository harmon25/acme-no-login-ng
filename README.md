	
	 _______                                     
	(_______)                                    
	 _______  ____ ____  _____                   
	|  ___  |/ ___)    \| ___ |                  
	| |   | ( (___| | | | ____|                  
	|_|   |_|\____)_|_|_|_____)                  
                                             
	 _______          _                  _       
	(_______)        (_)                (_)      
	 _     _  ___     _       ___   ____ _ ____  
	| |   | |/ _ \   | |     / _ \ / _  | |  _ \ 
	| |   | | |_| |  | |____| |_| ( (_| | | | | |
	|_|   |_|\___/   |_______)___/ \___ |_|_| |_|
	                              (_____|        
	
	by Websecurify (pdp)
	
FIX - This applies string checking on user input on the endpoint.
If a $ is present in the query - return an error.

# System Requirements

You will need docker installed and fully functional.

# How To Build

Run the following command:

	make docker-build

# How To Use

Run the following command:

	make docker-run

The application will be available on localhost:49090.
