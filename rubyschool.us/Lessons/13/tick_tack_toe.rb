#Хэш ячеек
#По дефолду значения ячеек соответствуют своим ключам
@table = {
  1 => 1,
  2 => 2,
  3 => 3,
  4 => 4,
  5 => 5,
  6 => 6,
  7 => 7,
  8 => 8,
  9 => 9
}

##Поле игры, которое будет отображаться
def show_table
  puts "   |   |   "
  puts " #{@table[1]} | #{@table[2]} | #{@table[3]} "
  puts "___|___|___"
  puts "   |   |   "
  puts " #{@table[4]} | #{@table[5]} | #{@table[6]} "
  puts "___|___|___"
  puts "   |   |   "
  puts " #{@table[7]} | #{@table[8]} | #{@table[9]} "
  puts "   |   |   "
end

#Игрок: выбор ячейки
def player_turn
  puts
  print "Первый игрок выбирает ячейку: "
  @user_input = gets.to_i

  check_player_turn

  @table[@user_input] = "X"
end
#Компьютер: выбор ячейки
def comp_turn
  puts
  print "Второй игрок выбирает ячейку: "
  @comp_input = gets.to_i

  check_comp_turn

  @table[@comp_input] = "O"
end

def check_player_turn
  if @table[@user_input] == "X" || @table[@user_input] == "O"
    player_turn
  end
end

def check_comp_turn
  if @table[@comp_input] == "X" || @table[@comp_input] == "O"
    comp_turn
  end
end






#Игра
#Первый показ поля перед началом игры
show_table

#Начало игры
while true

  #Игрок выбирает куда походить
  player_turn
  #Отображение хода игрока
   puts
   show_table
   sleep 1

   #Компьютер выбирает куда ходить
   comp_turn
   #Отображение хода компьютера
   puts
   show_table

end
