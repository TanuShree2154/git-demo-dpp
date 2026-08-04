import random

# Choices
choices = ["stone", "paper", "scissors"]

# Computer choice
computer = random.choice(choices)

# User choice
user = input("Enter stone, paper, or scissors: ").lower()

print("You chose:", user)
print("Computer chose:", computer)

# Check winner
if user == computer:
    print("It's a Tie!")
elif (user == "stone" and computer == "scissors") or \
     (user == "paper" and computer == "stone") or \
     (user == "scissors" and computer == "paper"):
    print("You Win!")
elif user in choices:
    print("Computer Wins!")
else:
    print("Invalid Input!")
    