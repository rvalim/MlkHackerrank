//https://www.hackerrank.com/challenges/abbr



// Complete the luckBalance function below.
function abbreviation(a, b) {
    debugger
    //97 - 122
    var dp = {}
    let nextIndex = 0 //controls the position to be found on the b string
    let lastUsed = ''
    const isLowerCase = (w, i) => {
        const code = w.charCodeAt(i)
        return code >= 97 && code <= 122
    }

    for (let i = 0; i < a.length; i++) {
        const uA = a[i].toUpperCase()
        const index = b.indexOf(uA, nextIndex)

        //Uppercase at the correct position
        if (isLowerCase(a[i]) && index === nextIndex) {
            dp[uA] = (dp[uA] || 0) + 1
            lastUsed = uA
        //If the last lower used usbstitutes the uppercase one
        } else if (!isLowerCase(a[i]) && index !== nextIndex) {
            dp[uA] = (dp[uA] || 0) - 1

            //There wasnt a lower case used in it position
            if (dp[uA] === -1 || lastUsed !== a[i]) return 'NO'
        }

        //A proxima deve ser sequencial
        if (nextIndex === index) nextIndex++
    }

    return nextIndex === b.length ? 'YES' : 'NO'
}

const _param0 =
    //     [
    //         'Pi P',
    //     'AfPZN APZNC',
    //     'LDJAN LJJM',
    //     'UMKFW UMKFW',
    //     'KXzQ K',
    //     'LIT LIT',
    //     'QYCH QYCH',
    //     'DFIQG DFIQG',
    //     'sYOCa YOCN',
    //     'JHMWY HUVPW'
    // ]
    // // ['AbCdE AFE',
    // // 'beFgH EFG',
    // // 'beFgH EFH']
    // ['LLZOSYAMQRMBTZXTQMQcKGLR LLZOSYAMBTZXMQKLR',
    // 'MGYXKOVSMAHKOLAZZKWXKS MGXKOVSAHKOLZKKDP',
    // 'VLKHNlpsrlrvfxftslslrrh VLKHN',
    // 'OQSVONTNZMDJAVRZAZCVPKh OSVONTNZMDJAVRZAZCVPK',
    // 'AXbosoh AX',
    // 'EYONDOCHNZYYlBZXPGzX EYONDOCHNZYYBZXPGXOG',
    // 'BJAFXKGENMFUvdsvcptrp BJAFXKGENMFU',
    // 'UBUFOOSIXXsdtfmeyongkhehq UBUFOOSIXX',
    // 'PWBIJLCOIAXGJGUXUZOutgic PWBIJLCOIAXGJGUXUZO',
    // 'EOWZEOHWYOJTBNMcefdsp EOWZEOHWYOJTBNM',]
    
    // [
    // 'XXVVnDEFYgYeMXzWINQYHAQKKOZEYgSRCzLZAmUYGUGILjMDET XXVVDEFYYMXWINQYHAQKKOZEYSRCLZAUYGUGILMDETQVWU',
    // 'PVJSNVBDXABZYYGIGFYDICWTFUEJMDXADhqcbzva PVJSNVBDXABZYYGIGFYDICWTFUEJMDXAD',
    // 'QOTLYiFECLAGIEWRQMWPSMWIOQSEBEOAuhuvo QOTLYFECLAGIEWRQMWPSMWIOQSEBEOA',
    // 'DRFNLZZVHLPZWIupjwdmqafmgkg DRFNLZZVHLPZWI',
    // 'SLIHGCUOXOPQYUNEPSYVDaEZKNEYZJUHFXUIL SLIHCUOXOPQYNPSYVDEZKEZJUHFXUIHMGFP',
    // 'RYASPJNZEFHEORROXWZFOVDWQCFGRZLWWXJVMTLGGnscruaa RYASPJNZEFHEORROXWZFOVDWQCFGRZLWWXJVMTLGG',
    // 'AVECtLVOXKPHIViTZViLKZCZAXZUZRYZDSTIHuCKNykdduywb AVECLVOXKPHIVTZVLKZCZAXZUZRYZDSTIHCKN',
    // 'wZPRSZwGIMUAKONSVAUBUgSVPBWRSTJZECxMTQXXA ZPRSZGIMUAKONSVAUBUSVPBWRSTJZECMTQXXA',
    // 'SYIHDDSMREKXOKRFDQAOZJQXRIDWXPYINFZCEFYyxu SYIHDDSMREKXOKRFDQAOZJQXRIDWXPYINFZCEFY',
    // 'EIZGAWWDCSJBBZPBYVNKRDEWVZnSSWZIw EIZGAWWDCSJBBZPBYVNKRDEWVZSSWZI'
    // ]

// [
//     'AbCdE AFE',
//     'beFgH EFG',
//     'beFgH EFH'
// ]

    [
        // 'lyylyyllyyylllyylyyylyllylyllllllyyylyllyyyylllllylyylyyllylyylllyhyllllyylllyllylyllylyllllyylylylyyylyllyyylylllyylylllyyllyylylyyllyylyyylllyllylyyllyllllyylylyylllllllyllyyyyyylllyyylylylylyyyyyyyymylyyyylyyyylyyyylyyyylylylylylyllylyylllyllyylylyyllyyyylylllyyyyyllllllyllyylllylyylyllllyyllllylyyyyyllllylylllyyyylyylyyyllyylyyyylylyyyylyyyyylyylllyyllylyyllyllyyyyyylylllylyyyyyllyylyyyyylyyylyylyylylylyyllllyylllyylylllyllyylylyllylllyllyyyyyylyyyllyllyyllyllyylyllyllyyylyyyyylylllyyylllyyyllylyllylylyyllylllylyyyyylyyyylyyyylyyyyylylllllyylyylyyyylyylyyylyylllllllyyyyyyyylyyylylllllylyrlyylllyylylllllylyylyylyyllylyyyyllyyyllylllyllylllylyyyyylylylyyllyyyyylllyyyllllylyllyyyllllyyllyyylllylyylyyyllllyllylllylyllylllyyllllyllyyymyylylllyylllllllyyyyylyyyllyyyyyyylylylyylylyylylyyllyyyllylylyyyylyyyyyyyyyyylllylylllllylllyylllyyllllllyylllllyllyyllyylyyllllyylyylyyllllyyyllllyyylylylylyylyllylllyyylylylylyyylyllllllylyllllyylyllylllyllyylylllylllyllllylyyylylllyyylllyylllllllyllyyy LYYLYYLYYYLLLYYLYYYYLLYLLLLLLYYYLYLLYYYYLLLLYLYLYYLLYLYLLYYLLLYYLLLLYLYLLYLYLLLLYYLYLLYYLYLLYLLLLYLYLLYLYYLLYYLLYYLYYYLLLYLYLYYLLYLLYYYLYLLLLLLLYLLYYYYYLLLYYYLYLYLYLYYYYYYYLYYYLYYYYLYYLYYYYLYYLYLYLYLLYLYYLLLYLLYYLYLYLLYYYLYLLLYYYYLLLLLLYLLYYLLLYLYYLYLLLLYLLLYLYYYYYLLLLLYLLLYYYYLYYLYYLLYYLYYYYLYLYYYYLYYYYYLYYLLLYYLLYLYLLYLLYYYYYLYLLYLYYYYYLLYYLYYYYLYYYLYYLYYLYLYLYYLLLLYYLLLYYLYLLLYLLYLYLYLLYLLLYLLYYYYYYLYYYLLYLYYLLYLLYLYLLYLLYYYLYYYYLLLLYYYLLLYYYLLYLYLLYLYLYYLLYLLLYLYYYYYLYYYYLYYYYLYYYYYLYLLLLLYYLYYLYYYLYYYYYLYYLLLLLLLYYYYYYYYLYYLYLLLLYLYLYYLLYYLYLLLLLYLYYLYYLYLLYLYYYLYYYLYLLLYLLYLLYLYYYYYLLYYYLLYYYYYLLYYYLLLLYLYLLYYYLLLLYYLLYYYLLLYLYYLYYYLLLYLLYLYLYLLYLLYYLLLYLLYYYYYLYLLLYYLLLLLLLYYYYYLYYLLYYYYYYLYYLLYYLYLYYLLYYYLLYYLYYYYLYYYYYYYYYYYLLLYYLLLLLYLLLYYLLLYYLLLLLYYLLLLYLYYLLYYLYYLLLYYLYYLYYLLLLYYYLLLLYYYYLYLYLYYYLLYLLLYYYLYLYLYLYYLYLLLLLYLYLLLYYYLLYLYLLYYLYLLYLLLYLLYLYYYLYLLLYYLLYYLLLLLLYLYY', 
        // 'bbBbbbbbrbBbbBbbbbbbbbbrbbbbbBbbbbbbbbbbbbbbobbbbbbbsbbbbbtbBbsbbtbbbbbbbobbbbbbbbbbsbbbbbbbbbbbbbbsbbbbbbbbbbrbrbbBbbbbbbTBbbbbbbbbbbbtbbbbbbbbbbbbbbbbBbbbobbbbbbbbbbbbbtbbbbbbbBbbbbbbbbbBbbsbbbbbbbbobbbbbbbsbbbbbbbbbbbbbbbbbbbbbbtbbbbbbbbrbbbbBbbbbbbbbsbbbbbbobBborbbbbbbbbbbrbbbbbbbbbbbbbbbbbbbbbbbbbtbbbbtbbbbbbbbtbbbbbbbbbbbbbbbbbbbbbbbBbobbbbbBbbbbbbbbbbbbbbbBobbbbbbbbbBbbbrbbbbbbbbbbtbboBbbbbbbbbbbbbSbbbtbbbbbbbbbbbbbbbbbbbbbbtbbbrbbbbbBbbbbbbbbbobbbbbbbbbbbbbbsbbbbbbtbrbbrbbbbbbobbbbbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbBbbbbbBbbbbbbbbbbBbbbbbbbbbbbObbtrbsbbbbbbbbbbbbbbbbbbbbrbbbbbbbobbbbbbbbbbbbbbbbbBbbbbbbbbbbbbbbbbbbbbbbrbbbbbbbbbbbbbbbBbbBbbbbbrbbbbbbbbbbbbbbbbbbbbrbbbsbbbbbrbbbbbbbbbbbrobbbbsbbbbbsbbbBbbbbbbbbbbtTbbbbbbbbbbbbtbbtrbobbbbbbbbbbbbbBbbbbbbsbbbbbbbbbbbbbbbbbbBbbbbbbbbbbobbbbbbbbbbbbbbbbbbbbobbbTbsBbbbbbbbbbbbbsbbbbbssbbbbbbbbbSbbbbbbbbbbbbbbsbbbbbbbbbbbbbBbbbbbbbbbbbbbsbbbbBbbtbbSbbbbbbbbbbbbbsbobbbBbbbrbBbbbbbbbbbbbBbbobbbbbbbbbbbbbbbbbbbbtbosbbbbbbbbtbbbbbbbbbbrbb BBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBOBBBBBSBBBBTBBBSBBTBBBBBBBBBBBBBSBBBBBBBBBBBBBSBBBBBBBRBBBBBBBBBTBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBSBBBBBBOBBBBSBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBOBBBORBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBTBBBBBBBBTBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBTBOBBBBBBBBBBSBBTBBBBBBBBBBBBBBBBBBTBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBSBBBBTBBBRBBBBBOBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBOBTRBSBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBRBBBBBBBBBBBBBBBBBBRBBBBBBRBBBBBBBBBBROBBBBBBBBSBBBBBBBBBBBBBTTBBBBBBBBBBBTBBTROBBBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBOBBBBBBBBBBBBOBBBTBSBBBBBBBBBBSBBBSBBBBBBSBBBBBBBBBBBSBBBBBBBBBBBBBBBBBBBBBBBBSBBBBBBTBBSBBBBBBBBBBSBOBBBBBBRBBBBBBBBBBBBBBOBBBBBBBBBBBBBBBBBTBSBBBBBBTBBBBBBBBRB', 
        // 'tssssssssssssssssssssssspssssssssssstsssslssssssstsssssssssspsssssssssssstsssssssssssssssssssssssssssssssssstssspsssssspssssssssssssssssslssssslssslsssslsssssssssssssssslssssssssssssslsstssssssssslsssspssslslssssssssssssssssspstssssssssssssssssssslssssssslsssisssssssssssssssssssssssssssssssssssslssssssssssspsssssssssiisssssssssssspssssssssssssssssssssssssstsssssssssssssssstsssssssyssssssssssssssssssssssstssissssssssssssptssssssssssissssspssssssstsssstssssssssssttssssssssssssssssssssssssssssssssssssssssilsssssspsssssstsssslsssssssssssisssssssssssstsssssssssssssssssisssssssssssstsisstsssssisssssssssssssssssssssissssstssstsssssssssttsssssssstsssssssisssssssssssssssssslsssssssssssstlsssspssssstsstsssslsssssssssssssssssstsssssssssssisssssssssssssssspssstslssssssssssssssssssssssisisssssssssssspssssssssssssssstssspsssssssssspsssssssslppssssssssssssssssssssspissssssississsslsssstssssssssspssslstsssssssssssssslssslssssssssspsssssssspissssssisssssssssssssssssstsssssssspssssspsssssssstssssstsssss TSSSSSSSSSSSSSSSSSSSSSSSSSSSTSSSSSSSSSSTSSSSSSPSSSSSSSSSSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTSSSPSSSSSSPSSSSSSSSSSSSSLSSSSSSLSSSLSSSSSSSSSSSSSSSLSSSSSSSSSSSSLSSTSSSSSSSSLSSSPSLSLSSSSSSSSSSSPTSSSSSSSSSSSLSSSSSSSLSISSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSPSSSSSSSSIISSSSSSSSSSSPSSSSSSSSSSSSSSSSSSSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSTSSSSSSSSSSSSPSSSSSSSSSISSSPSSSSSSSSSTSSSSSSTTSSSSSSSSSSSSSSSSSSSSSSSSSSSSILSSSSSSSSSSTSSSLSSSSSSSSSSISSSSSSSSTSSSSSSSSSSSSSSISSSSSSSSSTSSSTSSSSSISSSSSSSSSSSSSSSSSISSSSTSSSTSSSSSSSSTTSSSSSSSSSSSSSSISSSSSSSSSSSSSSSLSSSSSSSSSSSTSSSSPSSSSSSTSSSSSSSSSSSSSSSSSSSTSSSSSSSSSISSSSSSSSSSSPSSSTSSSSSSSSSSSSSSSSSSSISSSSSSSSSSPSSSSSSSSSSSSSPSSSSSSSSSSPSSSSSSSLPSSSSSSSSSSSSSSSSSSSPISSSSSSSSLSSSTSSSSSSPSSSLSTSSSSSSSSSSSSLSSSLSSSSSSSSSSSSSPISSSSSSSSSSSSSSSSSSTSSSSSSSPSSSPSSSSSSSTSSSSTSSSSS', 
        // 'aAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 
        // 'aAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAa AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 
        // 'abcdefghijklmnopqrstuvwxyzaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaaAaabcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        'abaBababababababaBabAbabababaBabababAbabAbababAbabaBababababAbAbababaBababAbaBabababababababababAbababababababAbabAbabAbaBababababababAbababaBababAbabababababababababababababAbAbaBababababababAbabababababababaBabababababababababaBabAbabaBabababaBababababababababababaBababababaBabababaBababaBababababababaBabababababAbaBabAbaBababaBabaBaBabababababababababababaBabababababAbabaBabababAbababAbabababababababababaBababababababababaBababAbABababababababababaBababababaBabababababAbabaBababababababababaBaBabaBabAbabAbabAbaBababAbAbaBAbAbabAbabAbabababababaBabababababababababAbabababaBababaBabABababababababababaBabababababababababababababaBAbAbababababAbababababababababababababababababababababaBabABabAbabababababAbaBaBabababababababaBabababababababababababaBabaBabababAbababababababaBababaBababababababababababababaBababababababaBabaBabababaBabababaBabababAbabababababababAbababababababababababaBaBababaBabababAbabaBabAbabababaBabababababababababababababababababababababababababababababababababababab AABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABB', 
        // 'abababAbaBaBabAbabababababAbAbabababababababababababababababababAbababaBabababAbabAbababaBAbaBabaBaBabababababAbaBababaBababAbabABAbabababababababAbabAbababABabababababababaBababAbabababababababababababababababAbabababABababABAbabababababaBAbababababababababababababababababaBababAbababAbabaBAbAbababababababababababAbAbababababABabababABababababababababaBabababababababaBAbaBabababababaBabAbabababababaBAbababAbababababaBabaBababababababababaBabababaBababababababababAbABabaBaBabababababaBabaBabababAbaBabababAbabAbaBabababababababababAbaBaBababababAbAbabababaBabAbababababababababababABabababababaBababababaBaBababaBabAbaBabAbabababAbabababababababaBabababababAbAbababababababababababababababababababAbababababababababaBabaBabababAbababababababababababAbabababAbaBababAbabaBabababaBabababababababababaBababaBabababababababababaBabaBaBababababababaBABababAbabAbabababAbabababaBabaBababAbabaBaBAbAbababababababababAbababAbabababaBababababababababAbaBababaBabababababababaBaBabaBababababababababababab AABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABB', 
         'abcdefghijklmnopqrstuvwxyzabaBababababababababaBababababababababababababababababAbabababababababababAbabababababababAbababababaBabababababababababababaBabababAbabababababababababababababababababababababababababababababAbabaBababababababababababAbAbabababababAbababababababAbababaBabaBabaBabABababAbababAbabababababababababAbAbabababAbAbabababababaBababababababAbababABabAbabAbababababaBabababababababababababababababababababababAbababababababAbabababababababababababaBabaBabababababababaBababababaBababAbababaBabaBabababababababababababaBababababababababaBababababababababAbAbabaBabababAbabAbabababababaBababababababAbababababAbabababababaBabababababaBAbababAbabababababAbabababababababababababababababababababababababababaBababababAbababababababababababAbabababababAbAbabababababababABabababababababaBababababababaBabababababababababababAbababababababababababAbabaBabababAbabababababAbabababAbabababababababAbabababababababababababaBabAbababababABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBABCDEFGHIJKLMNOPQRSTUVWXYZ', 
        // 'abcdefghijklmnopqrstuvwxyzababababAbAbaBabAbababababAbababaBabaBabAbaBababababababababaBababaBababababaBabaBabababABabababAbabababaBAbababababababababababAbababaBabababAbabababababababaBaBabAbabaBababababababababaBAbabaBAbabAbababababaBababAbababababababaBabababababaBaBaBababababAbabaBababaBaBabababababababababababababababababababAbababababababababAbababaBababababababababAbabaBabababaBAbabababababababababababababababaBababAbabababaBAbababababaBabababababababaBaBabababababababAbababababababababAbabababaBabAbabaBabAbAbabAbaBabababababaBaBababABabababababAbaBababababababaBabababababababababababAbababababababababababababababababaBabababababababababababababababAbabaBababababababababababaBAbabababAbababababababababaBabababaBaBabababababababababaBababAbaBababAbababababaBAbababaBababababababAbABabababAbababaBababababababaBaBababababAbAbabababababababababaBababababababababababababababababaBabababAbabAbababababABabababAbabababababababababaBabABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBABCDEFGHIJKLMNOPQRSTUVWXYZ',
    ]

facedeAbbr = () => {
    _param0.forEach(e => {
        const aux = e.split(' ')
        console.log(abbreviation(aux[0], aux[1]))
    })
}

facedeAbbr()
