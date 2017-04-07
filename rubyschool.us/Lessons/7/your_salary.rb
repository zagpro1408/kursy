print "Вы довольны своей ЗП? (Y/N) "

answer = gets.strip.downcase

if answer == "y"
  puts "Очень хорошо"
elsif answer == "n"
  puts "Очень плохо"
else
  puts "Вам надо ответить (Y/N)"
end

sleep 1
puts "\n--------------\nСпасибо за ваш ответ"
