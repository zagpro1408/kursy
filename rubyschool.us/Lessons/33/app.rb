hh = {}

loop do

    print "Enter product id: "
    id = gets.chomp

    print "Enter amount (how much items you want to order): "
    n = gets.chomp.to_i

    x = hh[id].to_i
    x = x + n
    hh[id] = x

    puts hh.inspect

    # canculate total number of items in cart
    total = 0
    hh.each do |key, value|
        total = total + value
    end

    puts "Total items in cart: #{total}"
    puts "==========="

end

