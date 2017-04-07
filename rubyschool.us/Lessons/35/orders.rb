orders = "product_1=1,product_2=2,product_3=3,";

s1 = orders.split(/,/)

puts s1.inspect

s1.each do |x|
    s2 = x.split(/=/)
    s3 = s2[0].split(/_/)

    key = s3[1]
    value = s2[1]

    puts "Producy: #{key}, number of items: #{value}"
    sleep 1
end


