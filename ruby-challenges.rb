# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# create fxn that takes any given number as an input
# .even? to check if # is even (could also use mod operator:  number % 2 == 0 for even)
# string interpol to insert given number in a string 
# else, string interpol for odd string

def even_or_odd(number)
  if number.even?
    "#{number} is even"
  else
    "#{number} is odd"
  end
end


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# create fxn that will take in any str and remove vowels
# .delete removes any occurrence of vowels from given str
# return modified str

def remove_vowels(string)
  vowels = "aeiouAEIOU"
  string.delete(vowels)
end

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create fxn that takes in any given str and checks if it is a palindrome
# if statement for string == string.reverse to see if letters are same back and forth
# str interpol for true and false of string == string.reverse 

# first try 
def palindrome? (string)
      if string == string.reverse
          "#{string} is a palindrome"
      else
          "#{string} is not a palindrome" 
      end
  end
   
  # p palindrome?(palindrome_test_case1)
  # p palindrome?('Racecar')

  # the fxn should work in theory but isnt working for palindromes??

#  im dumb. i console logged both and now see that it isnt the same because Caps dont == small caps D: 
# TRY NUMBER 2! 
# Pseudo code:
# create fxn that takes in any given str and checks if it is a palindrome
# convert string to all lowercase
# i used gsub to make my fxn more dynamic.
# if statement for string == string.reverse to see if letters are same back and forth
# str interpol for true and false of string == string.reverse 

def palindrome? (string)
  small_case_string = string.downcase.gsub(/\s+/, "")
  if small_case_string == small_case_string.reverse
      "#{small_case_string} is a palindrome"
  else
      "#{small_case_string} is not a palindrome" 
  end
end
p palindrome?(palindrome_test_case1)
