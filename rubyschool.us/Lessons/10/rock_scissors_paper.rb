arr = [:rock, :scissors, :paper]
player_stat = []
computer_stat = []

loop do

  print "(R)ock / (S)cissors / (P)aper : "
  player = gets.strip.capitalize
  computer = rand(1..3)

  #Выход из программы
  if player == ""
    break
  else

  end

  #Игрок выбрал камень
  if player == "R" && computer == 1
    puts "Ничья!"
  elsif player == "R" && computer == 2
    puts "Вы выйграли!"
    player_stat << :W
  elsif player == "R" && computer == 3
    puts "Вы проиграли"
    computer_stat << :W
  end

  #Игрок выбрал ножницы
  if player == "S" && computer == 2
    puts "Ничья!"
  elsif player == "S" && computer == 3
    puts "Вы выйграли!"
    player_stat << :W
  elsif player == "S" && computer == 1
    puts "Вы проиграли"
    computer_stat << :W
  end

  #Игрок выбрал бумага
  if player == "P" && computer == 3
    puts "Ничья!"
  elsif player == "P" && computer == 1
    puts "Вы выйграли!"
    player_stat << :W
  elsif player == "P" && computer == 2
    puts "Вы проиграли"
    computer_stat << :W
  end

end

puts "Игрок #{player_stat.length} Компьютер: #{computer_stat.length}"
