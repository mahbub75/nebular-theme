export class NbColorHelper {
    static shade(color, weight) {
        return NbColorHelper.mix('#000000', color, weight);
    }
    static tint(color, weight) {
        return NbColorHelper.mix('#ffffff', color, weight);
    }
    static mix(color1, color2, weight) {
        const d2h = (d) => d.toString(16);
        const h2d = (h) => parseInt(h, 16);
        let result = '#';
        for (let i = 1; i < 7; i += 2) {
            const firstPart = h2d(color1.substr(i, 2));
            const secondPart = h2d(color2.substr(i, 2));
            const resultPart = d2h(Math.floor(secondPart + (firstPart - secondPart) * (weight / 100.0)));
            result += ('0' + resultPart).slice(-2);
        }
        return result;
    }
    static hexToRgbA(hex, alpha) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length === 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + alpha + ')';
        }
        throw new Error('Bad Hex');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sb3IuaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay90aGVtZS9zZXJ2aWNlcy9jb2xvci5oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGFBQWE7SUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUN4QixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUN2QixPQUFPLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU07UUFDL0IsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFbkMsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0YsTUFBTSxJQUFJLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSztRQUN6QixJQUFJLENBQUMsQ0FBQztRQUNOLElBQUksMEJBQTBCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDekMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDO1lBQ0QsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzVGLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOYkNvbG9ySGVscGVyIHtcbiAgc3RhdGljIHNoYWRlKGNvbG9yLCB3ZWlnaHQpIHtcbiAgICByZXR1cm4gTmJDb2xvckhlbHBlci5taXgoJyMwMDAwMDAnLCBjb2xvciwgd2VpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyB0aW50KGNvbG9yLCB3ZWlnaHQpIHtcbiAgICByZXR1cm4gTmJDb2xvckhlbHBlci5taXgoJyNmZmZmZmYnLCBjb2xvciwgd2VpZ2h0KTtcbiAgfVxuXG4gIHN0YXRpYyBtaXgoY29sb3IxLCBjb2xvcjIsIHdlaWdodCkge1xuICAgIGNvbnN0IGQyaCA9IChkKSA9PiBkLnRvU3RyaW5nKDE2KTtcbiAgICBjb25zdCBoMmQgPSAoaCkgPT4gcGFyc2VJbnQoaCwgMTYpO1xuXG4gICAgbGV0IHJlc3VsdCA9ICcjJztcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDc7IGkgKz0gMikge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gaDJkKGNvbG9yMS5zdWJzdHIoaSwgMikpO1xuICAgICAgY29uc3Qgc2Vjb25kUGFydCA9IGgyZChjb2xvcjIuc3Vic3RyKGksIDIpKTtcbiAgICAgIGNvbnN0IHJlc3VsdFBhcnQgPSBkMmgoTWF0aC5mbG9vcihzZWNvbmRQYXJ0ICsgKGZpcnN0UGFydCAtIHNlY29uZFBhcnQpICogKHdlaWdodCAvIDEwMC4wKSkpO1xuICAgICAgcmVzdWx0ICs9ICgnMCcgKyByZXN1bHRQYXJ0KS5zbGljZSgtMik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBzdGF0aWMgaGV4VG9SZ2JBKGhleCwgYWxwaGEpIHtcbiAgICBsZXQgYztcbiAgICBpZiAoL14jKFtBLUZhLWYwLTldezN9KXsxLDJ9JC8udGVzdChoZXgpKSB7XG4gICAgICBjID0gaGV4LnN1YnN0cmluZygxKS5zcGxpdCgnJyk7XG4gICAgICBpZiAoYy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgYyA9IFtjWzBdLCBjWzBdLCBjWzFdLCBjWzFdLCBjWzJdLCBjWzJdXTtcbiAgICAgIH1cbiAgICAgIGMgPSAnMHgnICsgYy5qb2luKCcnKTtcbiAgICAgIHJldHVybiAncmdiYSgnICsgWyhjID4+IDE2KSAmIDI1NSwgKGMgPj4gOCkgJiAyNTUsIGMgJiAyNTVdLmpvaW4oJywnKSArICcsJyArIGFscGhhICsgJyknO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBIZXgnKTtcbiAgfVxufVxuIl19