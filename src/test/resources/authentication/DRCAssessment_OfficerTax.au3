WinWait("Log in - internal-portal-dashboard-QA - Google Chrome","","20") 
If WinExists("Log in - internal-portal-dashboard-QA - Google Chrome","") Then
WinActivate("Log in - internal-portal-dashboard-QA - Google Chrome")
Send("laxman.prajapati{TAB}")
WinActivate("Log in - internal-portal-dashboard-QA - Google Chrome") 
Send("admin{ENTER}")
EndIf
