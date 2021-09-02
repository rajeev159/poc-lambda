user_pass = get_user_pass("admin")
if user_pass == input(“Please enter your password”):
  login()
else:
  print "Password is incorrect!"
