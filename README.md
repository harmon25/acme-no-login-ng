	
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
	
	Originaly by Websecurify (pdp)
	
FIX - This applies type checking on user input.
If the username or password is an object, it must be an injection attempt as they should be strings...

# System Requirements

You will need docker installed and fully functional.

# How To Build

Run the following command:

	make docker-build

# How To Use

Run the following command:

	make docker-run

The application will be available on localhost:49091.
