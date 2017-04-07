print "Сколько раз хотите играть: "
n = gets.to_i

print "Какое ваше любимое число: "
f = gets.to_i

1.upto(n) do |i|

  print "\nПопытка #{i}"

  r = rand(1..50)

  if r == f
    print " : Вы победили!"
    exit
  end

  sleep 0.5

end
