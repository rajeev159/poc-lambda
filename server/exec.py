def addition(a, b):
  return exec("%s + %s" % (a, b))
addition(request.json['a'], request.json['b'])
