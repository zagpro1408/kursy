catalog = {}

loop do

  print "Enter your name (ENTER to exit) : "
  name = gets.strip.capitalize

  if name == ""
    break
  end

  print "Enter your phone number: "
  number = gets.to_i

  catalog[name] = number

  puts "Number added"
  puts
end

puts
catalog.each do |key,value|
  puts "#{key}: #{value}"
end
