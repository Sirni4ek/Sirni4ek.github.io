def is_prime(n)
  if n <= 1
    return false
  end

  (2..Math.sqrt(n).to_i).each do |i|
    if n % i == 0
      return false
    end
  end

  return true
end

puts "Prime numbers:"
(1..100).each do |i|
  if is_prime(i)
    puts "#{i}: yes"
  else
    puts "#{i}: no"
  end
end
