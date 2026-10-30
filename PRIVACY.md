# Privacy

VM Boss doesn't collect, store or send any personal data. It has no accounts, analytics,
advertising or crash reporting, and its developers can't see how or whether you use it.

## What stays on your Mac

- Virtual machines, with everything inside them, in `~/VM Boss` (or wherever you keep
  them).
- Downloaded installers in `~/Library/Application Support/VM Boss/Installers`, and
  Android's emulator and system images in `~/Library/Application Support/VM Boss/Android SDK`.
- Preferences in VM Boss's preferences file.

The password you give Windows express installation is written to a setup disc inside the
VM so Windows Setup can read it; **Finish Setup** deletes that disc.

## When VM Boss connects to the internet

Only when you create a virtual machine, and only to the maker's own servers:

- Windows: VM Boss shows Microsoft's Windows 11 download page
  (`microsoft.com/software-download/windows11arm64`) in its own window, where you pick a
  language. That page is Microsoft's website, under Microsoft's privacy statement; VM Boss
  keeps nothing from it once the window closes. Windows itself then downloads from
  Microsoft's servers (`software.download.prss.microsoft.com`).
- Red Hat's VirtIO drivers for Windows, from `fedorapeople.org`.
- Linux installers, from the distribution's official mirror (for example
  `cdimage.ubuntu.com` or `dl-cdn.alpinelinux.org`), or from the download link you type
  for a custom Linux.
- Android: the list of Google's emulator and system images, and those downloads, from
  Google's Android SDK repository (`dl.google.com`).
- When the New Virtual Machine window opens, VM Boss reads Google's list to show the
  newest Android version.

These requests carry nothing about you beyond what any download does (your IP address and
the file requested). The operating systems you run in VM Boss make their own connections,
under their own privacy policies.

## Purchases

VM Boss Pro is bought from Apple in the Mac App Store edition, under Apple's privacy
policy; VM Boss only asks the App Store whether this Apple Account owns Pro. The direct
download's license key is checked on your Mac, without contacting any server, and it's
bought on the seller's checkout page in your browser. The free trial's start date is kept
on your Mac (`License.json` in VM Boss's Application Support folder, and your keychain).

## Contact

Questions: open an issue at <https://github.com/nader1414518/VMBoss-Public/issues>.
