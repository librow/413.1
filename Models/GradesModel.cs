using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace _413_1.Models
{
    public class GradesModel
    {
        [Required, Range(0,100)]
        public int assignments { get; set; } //does this need to be a double instead of int?
        [Range(0,100)]
        public int groupproject { get; set; }
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
