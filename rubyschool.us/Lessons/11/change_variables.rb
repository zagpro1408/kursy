a = 5
b = 2
puts "a: #{a}"
puts "b: #{b}"

a, b = b, a

puts
puts "a: #{a}"
puts "b: #{b}"

a = a + b
b = a - b
a = a - b

puts
puts "a: #{a}"
puts "b: #{b}"
