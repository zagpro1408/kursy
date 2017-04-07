arr = []

while true
  print "Введите цвет: "
  color = gets.strip

  if color == "stop"
    puts "Вы покинули программу"
    exit
  end

  arr << color
  puts arr

end
