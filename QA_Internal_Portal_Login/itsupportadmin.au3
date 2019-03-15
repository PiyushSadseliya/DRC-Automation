WinWait("Log in - 1TrakIt DRC - Google Chrome","","20")
If WinExists("Log in - 1TrakIt DRC - Google Chrome","") Then
WinActivate("Log in - 1TrakIt DRC - Google Chrome")
Send("ketan.prajapati{TAB}")
WinActivate("Log in - 1TrakIt DRC - Google Chrome")
Send("admin{ENTER}")
EndIf