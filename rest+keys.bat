@echo off
   echo Resetting keyboard state...
   rundll32 keyboard,disable
   rundll32 keyboard,enable
   echo Keyboard reset complete.
   pause