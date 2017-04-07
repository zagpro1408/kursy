
def password_weak password
  input = File.open('password.txt', 'r')

  while (line = input.gets)

    line.strip!

    return true if password.include? line
  end

  return false

end

print "Введите ваш пароль: "
password_input = gets.strip

x = password_weak password_input


if x
  puts "Your password is weak"
else
  puts "Your password is not weak"
end
