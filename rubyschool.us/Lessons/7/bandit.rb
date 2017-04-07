money = 100

puts "Остаток счета: #{money}"


1000.times do

  puts "Нажмите ENTER, чтобы начать играть..."
  gets

  x = rand(6)
  y = rand(6)
  z = rand(6)

  #анимация счетчика x
  20.times do |nn|
    any_x = rand(6)

    if nn < 19
      print "#{any_x}"
      print "\r"
      sleep 0.04
    else
      puts x
    end
  end

  #анимация счетчика y
  20.times do |nn|
    any_y = rand(6)

    if nn < 19
      print "#{any_y}"
      print "\r"
      sleep 0.04
    else
      puts y
    end
  end

#анимация счетчика z
  20.times do |nn|
    any_z = rand(6)

    if nn < 19
      print "#{any_z}"
      print "\r"
      sleep 0.04
    else
      puts z
    end
  end

#Комбинация: три одинаковых числа, кроме 000 и 555
  if x == y && x == z && x != 0 && x != 5
    money += 25*x
    puts "\nПоздравляю! Вы выйграли: #{25*x}$"

#Комбинация: три нуля ( 000 )
  elsif x == y && x == z && x == 0
    money = 0

#Комбинация: три пятерки ( 555 ) - Джекпот
  elsif x == y && x == z && x == 5
    puts "\nДжекпот! Вы выйграли: #{money*5-money}$"
    money *= 5

#Комбинация: два одинаковых соседа
  elsif x == y || y == z
    money += 5*x
    puts "\nПоздравляю! Вы выйграли: #{5*x}$"

#Отнимается 5$, если ни одна комбинация не сыграла
  else
    money -= 5

    #Рандомный комментарий
    comment = rand (1...3)
      if comment == 1
        puts "\nВы проиграли 5$. Ничего страшного, повезет в след. раз!"
      elsif comment == 2
        puts "\nГони теперь 5$, лох!"
      elsif comment == 3
        puts "\nАзартные игры на твое. Пока-пока 5$"
      end
  end


  puts "Остаток счета: #{money}\n______________________"

end


