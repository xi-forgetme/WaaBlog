function execCmd(cmd) {
    var result = '\n'
    switch (cmd) {
        case 'help': result += helpCmd(); result += ' '; break;
        default: result += errCmd(); break;
    }
    return result
}