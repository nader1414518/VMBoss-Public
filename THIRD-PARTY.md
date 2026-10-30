# Open-source components

VM Boss runs Windows virtual machines with QEMU, which it includes so you don't have to
install anything. These open-source programs are included, unmodified:

| Component | License | Project |
|---|---|---|
| QEMU 11.1.3 | GPL-2.0 | https://www.qemu.org |
| edk2 firmware (shipped with QEMU) | BSD-2-Clause-Patent | https://github.com/tianocore/edk2 |
| GLib 2.90.1 | LGPL-2.1-or-later | https://gitlab.gnome.org/GNOME/glib |
| PCRE2 10.49 | BSD-3-Clause | https://pcre2project.github.io/pcre2/ |
| pixman 0.46.4 | MIT | https://pixman.org |
| libslirp 4.9.7 | BSD-3-Clause | https://gitlab.freedesktop.org/slirp/libslirp |
| libfdt (dtc 1.8.1) | BSD-2-Clause | https://git.kernel.org/pub/scm/utils/dtc/dtc.git |

Their license texts are inside the app, in `VM Boss.app/Contents/Resources/qemu/licenses`.

**Source code.** Each release on the [Releases](https://github.com/nader1414518/VMBoss-Public/releases)
page includes `VM-Boss-<version>-sources.tar`: the exact source of every component above,
with the script that builds them. You can also ask for a copy by
[opening an issue](https://github.com/nader1414518/VMBoss-Public/issues/new/choose); this
offer is valid for three years after the last release that included QEMU.
