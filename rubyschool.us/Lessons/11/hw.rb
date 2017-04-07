array = %w["Вася", "Петя", "Степа"]

puts array

array.each_with_index do | value, i|

  puts "#{i}. #{array[i]}"

end
