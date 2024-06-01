/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, description, creator, _eyecolor, _shirtType, _bling) { 
    if (!_name || !description || !creator || !_eyecolor || !_shirtType || !_bling) {
        console.error("All NFT metadata fields are required.");
        return;
    }
    const nft = {
        _name: _name,
        description: description,
        creator: creator,
        dateCreated: new Date().toISOString(),
        _eyecolor: _eyecolor,
        _shirtType: _shirtType,
        _bling: _bling
    };
    nfts.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    if (nfts.length === 0) {
        console.log("No NFTs available.");
        return;
    }
    nfts.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft._name}`);
        console.log(`  Description: ${nft.description}`);
        console.log(`  Creator: ${nft.creator}`);
        console.log(`  Date Created: ${nft.dateCreated}`);
        console.log(`  Eye Color: ${nft._eyecolor}`);
        console.log(`  Shirt Type: ${nft._shirtType}`);
        console.log(`  Bling: ${nft._bling}`);
        console.log("------------------------------");
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;
}

// Call your functions below this line

mintNFT("CryptoPunk #1", "24×24-pixel, 8-bit-style unique avatar that's a non-fungible token (NFT) image", "Larva Labs studio", "Brown", "T-Shirt", "Gold Chain");
mintNFT("CryptoPunk #2", "24×24-pixel, 8-bit-style unique avatar that's a non-fungible token (NFT) image. ", "Matt Hall and John Watkinson", "Green", "Hoodie", "Silver Ring");
listNFTs();
console.log("Total Supply: " + getTotalSupply());