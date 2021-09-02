def addition(a, b):
  return eval("%s + %s" % (a, b))
result = addition(request.json['a'], request.json['b'])
print("The result is %d." % result)
