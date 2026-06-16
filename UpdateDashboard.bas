
' =============================================
' Procurement Dashboard - Update Macro
' Assigned to button at cell E6 on "Procurement Dashboard" sheet
' =============================================

Sub UpdateDashboard()

    Dim wsDash As Worksheet
    Dim ws As Worksheet
    Dim lastRow As Long
    Dim dashRow As Long
    Dim i As Long
    Dim clientRef As String
    Dim typeVal As String
    
    ' Sheets to skip
    Dim skipSheets As Variant
    skipSheets = Array("Procurement Dashboard", "Template")
    
    Application.ScreenUpdating = False
    
    Set wsDash = ThisWorkbook.Sheets("Procurement Dashboard")
    
    ' Clear existing data from row 13 downwards
    Dim lastDashRow As Long
    lastDashRow = wsDash.Cells(wsDash.Rows.Count, "B").End(xlUp).Row
    If lastDashRow >= 13 Then
        wsDash.Rows("13:" & lastDashRow).ClearContents
    End If
    
    dashRow = 13
    
    ' Loop through each sheet
    For Each ws In ThisWorkbook.Worksheets
        
        ' Skip dashboard and template sheets
        Dim skip As Boolean
        skip = False
        Dim s As Variant
        For Each s In skipSheets
            If ws.Name = s Then
                skip = True
                Exit For
            End If
        Next s
        If skip Then GoTo NextSheet
        
        ' Get client ref from B6
        clientRef = ws.Range("B6").Value
        
        ' Find last row of data in col B (from row 13)
        lastRow = ws.Cells(ws.Rows.Count, "B").End(xlUp).Row
        If lastRow < 13 Then GoTo NextSheet
        
        ' Loop through data rows
        For i = 13 To lastRow
            typeVal = Trim(ws.Cells(i, "B").Value)
            
            If LCase(typeVal) = "order" Then
                ' Write to dashboard
                ' Dashboard col B = Client ref (from B6)
                wsDash.Cells(dashRow, "B").Value = clientRef
                ' Dashboard col C = Item Description (project col C)
                wsDash.Cells(dashRow, "C").Value = ws.Cells(i, "C").Value
                ' Dashboard col D = Category (project col D)
                wsDash.Cells(dashRow, "D").Value = ws.Cells(i, "D").Value
                ' Dashboard col E = Supplier (project col E)
                wsDash.Cells(dashRow, "E").Value = ws.Cells(i, "E").Value
                ' Dashboard col F = Ref No (project col F)
                wsDash.Cells(dashRow, "F").Value = ws.Cells(i, "F").Value
                ' Dashboard col G = Lead Time (project col G)
                wsDash.Cells(dashRow, "G").Value = ws.Cells(i, "G").Value
                ' Dashboard col H = Est. Cost (project col H)
                wsDash.Cells(dashRow, "H").Value = ws.Cells(i, "H").Value
                ' Dashboard col I = Approved By (project col L)
                wsDash.Cells(dashRow, "I").Value = ws.Cells(i, "L").Value
                ' Dashboard col J = Amount Paid? (project col M)
                wsDash.Cells(dashRow, "J").Value = ws.Cells(i, "M").Value
                ' Dashboard col K = Paid Date (project col N)
                wsDash.Cells(dashRow, "K").Value = ws.Cells(i, "N").Value
                ' Dashboard col L = Amount Outstanding (project col O - calculated)
                ' Re-calculate: Est Cost - Amount Paid (avoids formula dependency)
                Dim estCost As Double
                Dim amtPaid As Double
                estCost = 0
                amtPaid = 0
                If IsNumeric(ws.Cells(i, "H").Value) Then estCost = ws.Cells(i, "H").Value
                If IsNumeric(ws.Cells(i, "M").Value) Then amtPaid = ws.Cells(i, "M").Value
                wsDash.Cells(dashRow, "L").Value = estCost - amtPaid
                
                dashRow = dashRow + 1
            End If
        Next i
        
NextSheet:
    Next ws
    
    ' Format currency columns H and L
    If dashRow > 13 Then
        wsDash.Range("H13:H" & (dashRow - 1)).NumberFormat = "£#,##0.00"
        wsDash.Range("J13:J" & (dashRow - 1)).NumberFormat = "£#,##0.00"
        wsDash.Range("K13:K" & (dashRow - 1)).NumberFormat = "dd/mm/yyyy"
        wsDash.Range("L13:L" & (dashRow - 1)).NumberFormat = "£#,##0.00"
    End If
    
    Application.ScreenUpdating = True
    
    MsgBox "Dashboard updated! " & (dashRow - 13) & " orders pulled across.", vbInformation, "Procurement Dashboard"

End Sub
