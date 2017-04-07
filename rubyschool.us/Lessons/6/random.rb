numbers = []

10.times do |x|
  n = rand 10
  numbers.push n
  puts "#{x + 1}. #{n}"
  sleep 1
end

puts "\nМаксимальное число: #{numbers.max}"
