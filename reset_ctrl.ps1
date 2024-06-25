$source = @"
using System;
using System.Runtime.InteropServices;

public class KeyboardReset
{
    [DllImport("user32.dll")]
    public static extern void keybd_event(byte bVk, byte bScan, uint dwFlags, UIntPtr dwExtraInfo);

    public static void ResetCtrlKey()
    {
        const int KEYEVENTF_KEYUP = 0x0002;
        keybd_event(0x11, 0, KEYEVENTF_KEYUP, UIntPtr.Zero); // 0x11 is the virtual key code for Ctrl
    }
}
"@

Add-Type -TypeDefinition $source -Language CSharp

[KeyboardReset]::ResetCtrlKey()

Write-Host "Ctrl key has been reset. Press any key to exit."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")