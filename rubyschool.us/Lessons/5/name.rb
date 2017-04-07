print "Введите вашего имя: "
name = gets
name.strip!
name.capitalize!

puts "Ваше имя: " + name

puts "В вашем имени #{name.length} букв(-ы)."
