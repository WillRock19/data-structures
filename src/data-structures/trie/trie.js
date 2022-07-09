/*
I. DEFINITION

The trie is a tree structure used to store words, where each character from the word occupies one 
node from the tree. This is used to help us to search words from a dictionary in a better way. Each
node have an internal array with 25 spaces, where each space is used to store a word from alphabet,
and each character represents character from a word. Each node also have a property called word-end,
or WE for shorts, that helps us to know if that node is the last character of a word or if it's not.

For instance: imagine we have a dictionary with only two words, "cab" and "cable".

                                  root
                                /
                              C
                            /
                           A   
                         /  
                        B   
                          \
                            L
                          /
                         E

The "B" node will have it's word-end property set as TRUE, because it's the end of the word "cab",
and the "E" node will have it's word-end property set as TRUE, because it's the end of the word
"cable". For all the others, the WE property will be false.

Another interesting to know is that the root node is ALWAYS empty (do not have any characters, 
only the array that stores the 25 characters from our alphabet.).



II. ADVANTAGES x DISAVANTAGES

Whenever we are working with characters that must be stored together and we need to search them again
in the future, the complexity of tries help us to make it managable, because all operations depends 
on the length of each word.

Another scenario is when we have to search anything according to it's prefix. If we have a word "CA"
and we want to return all the possible words available to complete it (in our internal dictionary),
tries helps to make it managable and costing as low as possible.

One disavantage is the amount of memory it's going to take. If we are talking about a small amount 
of words (data), we have to store the 25 length array for each node, even if we are not using every
space of them. So the worst case would be O(alphabet_length * number_of_characters * number_of_words).



III. COMPLEXITY

	        Worst Case
space          O(k)
insert         O(k)
delete         O(k)

Search is basically calculate the ASCII position of each character and look into the arrays of each
node to find it. So the complexity is going to depend on the length of the original word that's
being searched. So search complexity would be O(k), where k is the length of the word that you want
to search. We can also search for a word that does not exist in our original word-list (it might
exist on the trie, but the word-end property on the last character is false, so the word as a
whole does not exist). 

On Insertion, we have to look each character of our word and then calculate the ASCII value of them
to find the position in the node array. Once we do that we can create an node with the character OR,
if the node already exists in that position, go inside of it and calculate the ASCII for the next
character from the original word. We keep doing this until we get to the end character. If the node
for it exists, we just change the word-end property to true. If not, we create the node and add it 
to the previous character's array.

On delete, we have something similar. Most of the time we are not going to delete the actual word,
because other words might depend on it. So we need to make the same process that we did for search
a character, but when getting to the last word we just change the word-end property from true to
false - that way, we keep the node to be used for other words on our internal dictionary, but remove
the word that should not exist anymore. So, the complexity would be O(k), where k is the length of 
the word to be deleted.

*/

class Node{
    constructor(value){
        this.value = value;
        this.subCharacters = new Array(25).fill(null);
        this.wordEnd = false;
    }
}