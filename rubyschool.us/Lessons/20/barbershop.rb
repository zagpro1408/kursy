require "sinatra"

get '/' do
  erb :index
end

post '/' do
  @user_name = params[:user_name]
  @user_phone = params[:user_phone]
  @date_time = params[:date_time]

  @title = "Thank You!"
  @message = "Dear #{@user_name}, we will be waiting for you: #{@date_time}"

  f = File.open("users.txt", "a")
  f.write "\nUser: #{@user_name} \tPhone: #{@user_phone} \tDate: #{@date_time}"
  f.close

  erb :message
end
