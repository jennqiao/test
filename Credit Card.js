Credit Card

//Master card - Length of 16 or 18
//Starts with either: 56, or 123

//Visa - Length of 16 or 17
//Starts with: 100-111, 5672, 52,1223,2314

Mastercard_length = [16,18]
Visa_length = [12,16]
Discover_length = [10,18]

length_rules = {"Mastercard": [16,18], "Visa": [12,16], "Discover": [10,18]}

function right_length (hash, card_number)
{
	potential_cards = []
	for (var i = 0; i<hash.length; i++)
	{
		for (var j=0; j<hash.key.length; j++)
		{

			if (hash.key[j] == card_number.length)
			{
				potential_cards.push(hash.key);
			}
		}
		
	}
	return potential_cards;
}

console.log(right_length(length_rules, "1234567891234567"))

//number == inside the array



